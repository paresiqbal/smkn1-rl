<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CalendarImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CalendarImageController extends Controller
{
    public function index()
    {
        $calendar = CalendarImage::all();


        return Inertia::render('Admin/guide/Calendar', [
            'calendar' => $calendar->map(function ($item) {
                $item->image = $item->image ? asset('storage/' . $item->image) : null;
                return $item;
            }),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'year' => 'required|integer|min:1900|max:2100',
            'image' => 'required|image|max:2048',
        ]);

        $path = $request->file('image')->store('calendar_images', 'public');

        CalendarImage::create([
            'year' => $validated['year'],
            'image' => $path,
        ]);

        return redirect()->back()->with('success', 'Calendar image uploaded.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
