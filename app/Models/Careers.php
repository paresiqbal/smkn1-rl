<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Careers extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function major()
    {
        return $this->belongsTo(Majors::class, 'major_id');
    }
}
