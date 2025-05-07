<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\Admin\AgendaController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MajorController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\PublicAgendaController;
use App\Http\Controllers\PublicMajorController;
use App\Http\Controllers\PublicNewsController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::middleware('guest')->controller(AuthController::class)->group(function () {
    Route::get('/auth/register-admin', 'showRegisterAdmin')->name('show.register.admin');
    Route::post('/register-admin', 'registerAdmin')->name('register.admin');

    Route::get('/auth/register', 'showRegister')->name('show.register');
    Route::post('/register', 'registerUser')->name('register');

    Route::get('/auth/login', 'showLogin')->name('show.login');
    Route::get('/login', function () {
        return redirect()->route('show.login');
    });
    Route::post('/login', 'login')->name('login');
});

Route::middleware('auth')->post('/logout', [AuthController::class, 'logout'])->name('logout');


Route::middleware(['auth', AdminMiddleware::class])->group(function () {
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

    // tags routes
    Route::get('/admin/tags', [TagController::class, 'index'])->name('admin.tags');
    Route::post('/admin/tags', [TagController::class, 'store'])->name('admin.tags.store');
    Route::delete('/admin/tags/{tag}', [TagController::class, 'destroy'])->name('admin.tags.destroy');

    // news routes
    Route::get('/admin/news', [NewsController::class, 'index'])->name('admin.news.index');
    Route::get('/admin/news/create', [NewsController::class, 'create'])->name('admin.news.create');
    Route::post('/admin/news/store', [NewsController::class, 'store'])->name('admin.news.store');
    Route::get('/admin/news/{news}/edit', [NewsController::class, 'edit'])->name('admin.news.edit');
    Route::put('/admin/news/{news}', [NewsController::class, 'update'])->name('admin.news.update');
    Route::delete('/admin/news/{id}', [NewsController::class, 'destroy'])->name('admin.news.destroy');

    // agenda routes
    Route::get('/admin/agenda', [AgendaController::class, 'index'])->name('admin.agenda.index');
    Route::get('/admin/agenda/create', [AgendaController::class, 'create'])->name('admin.agenda.create');
    Route::post('/admin/agenda/store', [AgendaController::class, 'store'])->name('admin.agenda.store');
    Route::get('/admin/agenda/{agenda}/edit', [AgendaController::class, 'edit'])->name('admin.agenda.edit');
    Route::put('/admin/agenda/{agenda}', [AgendaController::class, 'update'])->name('admin.agenda.update');
    Route::delete('/admin/agenda/{agenda}', [AgendaController::class, 'destroy'])->name('admin.agenda.destroy');

    // major routes
    Route::get('/admin/majors', [MajorController::class, 'index'])->name('admin.majors.index');
    Route::get('/admin/majors/create', [MajorController::class, 'create'])->name('admin.majors.create');
    Route::post('/admin/majors', [MajorController::class, 'store'])->name('admin.majors.store');
    Route::get('/admin/majors/{major}/edit', [MajorController::class, 'edit'])->name('admin.majors.edit');
    Route::put('/admin/majors/{major}', [MajorController::class, 'update'])->name('admin.majors.update');
    Route::delete('/admin/majors/{major}', [MajorController::class, 'destroy'])->name('admin.majors.destroy');
});

Route::get('/news-preview', [PublicNewsController::class, 'index']);

// profile
Route::get('/profile/visi-misi', function () {
    return Inertia::render('Public/Profile/VisiMisi');
});
Route::get('/profile/sambutan', function () {
    return Inertia::render('Public/Profile/Sambutan');
});
Route::get('/profile/fasilitas', function () {
    return Inertia::render('Public/Profile/Fasilitas');
});

// article
Route::get('/article/news-list', [PublicNewsController::class, 'list'])->name('news.list');
Route::get('/article/news/{news}', [PublicNewsController::class, 'show'])->name('news.show');
Route::get('/article/agenda', [PublicAgendaController::class, 'index'])->name('agenda.index');

// majors
Route::get('/majors/tkj', [PublicMajorController::class, 'tkj'])->name('majors.tkj');
Route::get('/majors/tbsm', [PublicMajorController::class, 'tbsm'])->name('majors.tbsm');
Route::get('/majors/tkr', [PublicMajorController::class, 'tkr'])->name('majors.tkr');
Route::get('/majors/tei', [PublicMajorController::class, 'tei'])->name('majors.tei');
Route::get('/majors/dpib', [PublicMajorController::class, 'dpib'])->name('majors.dpib');
Route::get('/majors/titl', [PublicMajorController::class, 'titl'])->name('majors.titl');
Route::get('/majors/las', [PublicMajorController::class, 'las'])->name('majors.las');
