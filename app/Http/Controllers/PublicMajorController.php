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

    public function tei()
    {
        return inertia('Public/Majors/tei');
    }

    public function dpib()
    {
        return inertia('Public/Majors/dpib');
    }

    public function titl()
    {
        return inertia('Public/Majors/titl');
    }

    public function las()
    {
        return inertia('Public/Majors/las');
    }
}
