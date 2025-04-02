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
        // Fetch all tags from the database
        $tags = Tag::all();

        // Return the Inertia response with the tags data
        return Inertia::render('Admin/Tags', [
            'tags' => $tags,
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:50|unique:tags,name',
        ]);

        // Create the new tag
        $tag = Tag::create($validatedData);

        // Return an Inertia response with the updated tags list
        return Inertia::render('Admin/Tags', [
            'tags' => Tag::all(),  // Return all tags after creation
            'message' => 'Tag created successfully!',
        ]);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        // Send a success message and redirect to the tags list page
        return Inertia::render('Admin/Tags', [
            'tags' => Tag::all(),  // Return the updated tags list
            'message' => 'Tag deleted successfully!',
        ]);
    }
}
