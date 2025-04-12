<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use Illuminate\Support\Facades\Storage;

class PublicAgendaController extends Controller
{
    public function index()
    {
        $agendas = Agenda::latest()->get();

        $agendas->transform(function ($item) {
            $item->image = $item->image ? Storage::url($item->image) : null;
            return $item;
        });

        return inertia('Public/Article/Agenda/AgendaList', [
            'agendas' => $agendas,
        ]);
    }
}
