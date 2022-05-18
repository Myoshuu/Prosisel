<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->only('email', 'password');
        $validator = Validator::make($data, [
            'email' => 'required | email',
            'password' => 'required',
        ]);

        if ($validator->fails() || !(Auth::attempt($data))) {
            return response()->json(['message' => 'data not valid'], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'login success', 'token' => $token, 'user' => $user], 200);
    }

    public function register(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'nama' => 'required | string',
            'email' => 'required | email',
            'password' => 'required',
            'confirm_password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'data not valid'], 401);
        }

        if ($request->password !== $request->confirm_password) {
            return response()->json(['message' => 'password doesnt match'], 401);
        }

        $user = new User();
        $user->fill([
            'nama' => $request->nama,
            'email' => $request->email,
            'status' => 'user',
            'password' => Hash::make($request->password)
        ])->save();

        return response()->json(['message' => 'register success'], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'logged out'], 200);
    }
}
