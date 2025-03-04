<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;


class AuthController extends Controller
{
    public function showRegisterAdmin()
    {
        return Inertia::render('Auth/RegisterAdmin');
    }

    public function showRegister()
    {

        return Inertia::render('Auth/Register');
    }

    public function showLogin()
    {

        return Inertia::render('Auth/Login');
    }

    public function registerAdmin(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);

        // Hash the password before saving
        $validate['password'] = Hash::make($validate['password']);
        $validate['role'] = 'admin';

        $user = User::create($validate);
        Auth::login($user);

        return redirect()->route('show.login');
    }

    public function registerUser(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);

        $validate['role'] = 'user';

        $user = User::create($validate);
        Auth::login($user);

        return redirect()->route('show.login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        // Attempt to log the user in.
        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if ($user->role === 'admin') {
                return redirect()->route('admin.dashboard');
            } else {
                return redirect()->route('admin.dashboard');
            }
        }

        return redirect()->back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('show.login');
    }
}
