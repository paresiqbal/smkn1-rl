<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    public function index()
    {
        $tags = Tag::all();
        $news = News::with('tags')->latest()->paginate(10);

        // Modify each item to include the full image URL
        $news->getCollection()->transform(function ($item) {
            $item->image = $item->image ? Storage::url($item->image) : null;
            return $item;
        });

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

        $tags = $validatedData['tags'] ?? [];
        unset($validatedData['tags']);

        $news = News::create($validatedData);

        $news->tags()->sync($tags);

        return redirect()->back()->with('success', 'News uploaded successfully!');
    }

    public function edit(News $news)
    {
        $tags = Tag::all();

        // Load tags relationship so it's available for form binding
        $news->load('tags');

        return inertia('Admin/news/EditNews', [
            'news' => $news,
            'tags' => $tags,
        ]);
    }

    public function update(Request $request, News $news)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'published_at' => 'nullable|date',
            'tags' => 'nullable|array',
            'tags.*' => 'integer|exists:tags,id',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:3072',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('news_images', 'public');
            $validated['image'] = $path;
        }

        $tags = $validated['tags'] ?? [];
        unset($validated['tags']);

        $news->update($validated);
        $news->tags()->sync($tags);

        return redirect()->route('admin.news.edit', $news)->with('success', 'News updated!');
    }
}
