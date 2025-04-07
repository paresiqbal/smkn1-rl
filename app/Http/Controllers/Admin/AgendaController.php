<?php

namespace App\Http\Controllers\Admin;

use App\Models\Agenda;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class AgendaController extends Controller
{
    public function index()
    {
        $agendas = Agenda::latest()->get()->map(function ($agenda) {
            $agenda->image = $agenda->image ? Storage::url($agenda->image) : null;
            return $agenda;
        });

        return inertia('Admin/agenda/Agenda', [
            'agendas' => $agendas,
        ]);
    }

    public function create()
    {
        return inertia('Admin/agenda/CreateAgenda');
    }

    public function store(Request $request)
    {
        if (!auth()->user() || auth()->user()->role !== 'admin') {
            abort(403, 'Unauthorized action.');
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'image' => 'nullable|image|mimes:jpeg,png,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('agenda_images', 'public');
        }

        $validated['author_id'] = auth()->id();

        Agenda::create($validated);

        return redirect()->route('admin.agenda.index')->with('success', 'Agenda berhasil ditambahkan.');
    }

    public function edit(Agenda $agenda)
    {
        return inertia('Admin/agenda/EditAgenda', [
            'agenda' => [
                'id' => $agenda->id,
                'title' => $agenda->title,
                'content' => $agenda->content,
                'start_date' => $agenda->start_date,
                'end_date' => $agenda->end_date,
                'image' => $agenda->image ? asset('storage/' . $agenda->image) : null,
            ],
        ]);
    }

    public function update(Request $request, Agenda $agenda)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'image' => 'nullable|image|mimes:jpeg,png,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($agenda->image) {
                Storage::disk('public')->delete($agenda->image);
            }

            $validated['image'] = $request->file('image')->store('agenda_images', 'public');
        }

        $agenda->update($validated);

        return redirect()->route('admin.agenda.index')->with('success', 'Agenda berhasil diperbarui.');
    }

    public function destroy(Agenda $agenda)
    {
        if ($agenda->image) {
            Storage::disk('public')->delete($agenda->image);
        }

        $agenda->delete();

        return redirect()->route('admin.agenda.index')->with('success', 'Agenda berhasil dihapus.');
    }
}
