<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    // Store Data (Admin Only)
    public function store(Request $request)
    {
        $user = auth()->user();
        if ($user->status !== 'admin') {
            return response()->json(['message', 'invalid action'], 401);
        }

        $validator =  Validator::make($request->all(), [
            'nama' => 'required | string',
            'kelas' => 'required | string',
            'usia' => 'required | integer | min:2',
            'skills' => 'required | array',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'invalid data'], 422);
        }

        $profile = new Profile();
        $profile->nama = $request->nama;
        $profile->kelas = $request->kelas;
        $profile->usia = $request->usia;
        $profile->path = 'ok';
        $profile->save();

        $profile_id = $profile->id;
        $skills = $request->skills;

        // Make new collection
        $data = collect();
        //
        foreach ($skills as $item) {
            $data->push($item);
            foreach ($data as $single) {
                $val1 = $single[0];
                $val2 = $single[1];
            }

            $skill = new Skill();
            $skill->skill = $val1;
            $skill->level = $val2;
            $skill->profile_id = $profile_id;
            $skill->save();
        }
        // return $data;

        return response()->json(['message' => 'data successfully added', 'profile' => $profile], 200);
    }

    // Get All Profile Data
    public function showAll(Request $request)
    {
        $all = [];
        $profiles = Profile::all();
        foreach ($profiles as $profile) { // memilah profile satu satu
            array_push($all, self::singleData($profile));
        }
        return $all;
    }
    public function singleData($profile)
    {
        $skills = Skill::where(['profile_id' => $profile->id])->get();
        $arr = [];
        foreach ($skills as $skill) { // memilah skill satu satu dan dimasukkan ke collection
            $arr += [$skill->skill =>  $skill->level];
        }
        return ([
            'nama' => $profile->nama,
            'kelas' => $profile->kelas,
            'usia' => $profile->usia,
            'skill' => $arr,
        ]);
    }

    // Edit Data
    public function update(Request $request, $id)
    {
        $user = auth()->user();
        if ($user->status !== 'admin') {
            return response()->json(['message', 'invalid action'], 401);
        }

        $validator =  Validator::make($request->all(), [
            'nama' => 'required | string',
            'kelas' => 'required | string',
            'usia' => 'required | integer | min:2',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'invaild data'], 422);
        }
        $data = Profile::findOrFail($id);
        $data->update($request->all());

        return response()->json(['message' => 'data successfully updated'], 200);
    }

    // Destroy Data
    public function destroy($id)
    {
        $profile = Profile::findOrFail($id);
        Skill::where(['profile_id' => $profile->id])->delete();

        $profile->delete();
        return response()->json(['message' => 'data succesfully deleted'], 200);
    }
}
