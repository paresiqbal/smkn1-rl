<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Majors;
use Illuminate\Http\Request;

class MajorController extends Controller
{
    public function index()
    {
        $majors = Majors::withCount(['subjects', 'galleries', 'careers'])->latest()->get();

        return inertia('Admin/major/Major', [
            'majors' => $majors,
        ]);
    }

    public function create()
    {
        return inertia('Admin/major/CreateMajor');
    }
}
