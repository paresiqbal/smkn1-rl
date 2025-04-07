<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class NewsController extends Controller
{
    public function index()
    {
        $tags = Tag::all();
        $news = News::with('tags')->latest()->paginate(10);

        return inertia('Admin/news/News', [
            'tags' => $tags,
            'news' => $news,
        ]);
    }

    public function create()
    {
        $tags = Tag::all();

        return inertia('Admin/news/create-news', [
            'tags' => $tags,
        ]);
    }

    public function store(Request $request)
    {
        if (!auth()->user() || auth()->user()->role !== 'admin') {
            abort(403, 'Unauthorized action.');
        }

        $validatedData = $request->validate([
            'title'        => 'required|string|max:255',
            'content'      => 'required|string',
            'published_at' => 'nullable|date',
            'tags'         => 'nullable|array',
            'tags.*'       => 'integer|exists:tags,id',
            'image'        => 'nullable|image|mimes:jpg,jpeg,png|max:3072',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('news_images', 'public');
            $validatedData['image'] = $path;
        }

        $validatedData['author_id'] = auth()->id();

        // Remove tags from validated data because it's for relation, not news table
        $tags = $validatedData['tags'] ?? [];
        unset($validatedData['tags']);

        // Create the news
        $news = News::create($validatedData);

        // Sync tags to the pivot table
        $news->tags()->sync($tags);

        return redirect()->back()->with('success', 'News uploaded successfully!');
    }
}
