<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CalendarImage;
use Illuminate\Http\Request;

class CalendarImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/guide/Calendar');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'year' => 'required|numeric|min:1900|max:2100',
            'image' => 'required|image|max:2048',
        ]);

        // Save the image
        $path = $request->file('image')->store('calendar_images', 'public');

        // Create a new CalendarImage record
        $calendarImage = CalendarImage::create([
            'year' => $validated['year'],
            'image' => $path,
        ]);

        // Return the image path and other details as a response
        return response()->json([
            'message' => 'Calendar image uploaded successfully.',
            'imageUrl' => asset('storage/' . $calendarImage->image),
            'year' => $calendarImage->year,
        ]);
    }



    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
