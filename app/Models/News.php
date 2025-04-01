<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'published_at',
        'tags',
        'image',
        'author_id',
    ];

    protected $casts = [
        'tags' => 'array',
        'published_at' => 'date',
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
