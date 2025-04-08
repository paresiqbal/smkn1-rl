<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
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
}
