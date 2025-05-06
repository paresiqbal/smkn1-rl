<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicMajorController extends Controller
{
    public function tkj()
    {
        return inertia('Public/Majors/tkj');
    }

    public function tbsm()
    {
        return inertia('Public/Majors/tbsm');
    }

    public function tkr()
    {
        return inertia('Public/Majors/tkr');
    }
}
