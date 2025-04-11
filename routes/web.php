<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\Admin\AgendaController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\TagController;
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
