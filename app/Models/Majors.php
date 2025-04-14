<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Majors extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function subjects()
    {
        return $this->hasMany(Subjects::class, 'major_id');
    }

    public function galleries()
    {
        return $this->hasMany(Galleries::class, 'major_id');
    }

    public function careers()
    {
        return $this->hasMany(Careers::class, 'major_id');
    }
}
