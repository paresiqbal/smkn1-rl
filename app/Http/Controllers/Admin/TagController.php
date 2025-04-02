<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagController extends Controller
{
    public function index()
    {
        // Return the tags list to the frontend
        return Inertia::render('Admin/Tags', [
            'tags' => Tag::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:50|unique:tags,name',
        ]);

        // Create a new tag
        Tag::create($validatedData);

        // Redirect to the index route (same URL) after creating the tag
        return redirect()->route('admin.tags');
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        // Redirect to the index route (same URL) after deleting the tag
        return redirect()->route('admin.tags');
    }
}
