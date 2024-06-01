<?php

namespace App\Http\Controllers;

use App\Models\Operator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Login', []);
    }

    public function login(Request $request)
    {
        $operator = Operator::where('id', $request->id)->firstOrFail();

        if($operator->password === $request->password) {
            Auth::login($operator);
        }
    }
}
