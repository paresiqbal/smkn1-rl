<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'image',
        'start_date',
        'end_date',
        'author_id'
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
