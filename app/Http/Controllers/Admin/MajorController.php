<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Majors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'overview' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('majors');
        }

        Majors::create($data);

        return redirect()->route('admin.majors.index')->with('success', 'Major created successfully.');
    }

    public function edit(Majors $major)
    {
        return inertia('Admin/major/EditMajor', [
            'major' => $major,
        ]);
    }

    public function update(Request $request, Majors $major)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'overview' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($major->image) {
                Storage::delete($major->image);
            }
            $data['image'] = $request->file('image')->store('majors');
        }

        $major->update($data);

        return redirect()->route('admin.majors.index')->with('success', 'Major updated successfully.');
    }

    public function destroy(Majors $major)
    {
        if ($major->image) {
            Storage::delete($major->image);
        }

        $major->delete();

        return redirect()->route('admin.majors.index')->with('success', 'Major deleted.');
    }
}
