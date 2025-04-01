<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/News');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title'        => 'required|string|max:255',
            'content'      => 'required|string',
            'published_at' => 'nullable|date',
            'tags'         => 'nullable',
            'image'        => 'nullable|image|mimes:jpg,jpeg,png|max:3048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('news_images', 'public');
            $validatedData['image'] = $path;
        }

        // Automatically set the author_id if needed:
        $validatedData['author_id'] = auth()->id();

        News::create($validatedData);

        return redirect()->back()->with('success', 'News uploaded successfully!');
    }
}
