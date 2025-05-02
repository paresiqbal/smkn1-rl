<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicMajorController extends Controller
{
    public function tkj()
    {
        return inertia('Public/Majors/tkj');
    }
}
