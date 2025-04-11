<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use App\Models\Tag;
use Illuminate\Support\Facades\Storage;

class PublicNewsController extends Controller
{
    public function index()
    {
        $news = News::with('tags')->latest()->take(3)->get();

        $news->transform(function ($item) {
            $item->image = $item->image ? Storage::url($item->image) : null;
            return $item;
        });

        return response()->json($news);
    }

    public function list()
    {
        $tags = Tag::all();
        $news = News::with('tags')->latest()->paginate(10);

        // Modify each item to include the full image URL
        $news->getCollection()->transform(function ($item) {
            $item->image = $item->image ? Storage::url($item->image) : null;
            return $item;
        });

        return inertia('Public/Article/NewsList', [
            'tags' => $tags,
            'news' => $news,
        ]);
    }
}
