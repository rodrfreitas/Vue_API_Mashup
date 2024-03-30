<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Monster;


class MonsterController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
         $monsters = Monster::all();
         return response()->json($monsters);
     }

     public function getOne($id) {
         $monster = Monster::find($id);
         return response()->json($monster);
     }

     public function save(Request $request) {
        $this->validate($request, [
            'thumbnail' => 'required',
            'rank' => 'required',
            'name' => 'required',
            'type' => 'required',
            'subtype' => 'required',
            'alignment' => 'required',
            'monster_desc' => 'required',
            'full_img' => 'required'
        ]);
        $monster = Monster::create($request->all());
        return response()->json($monster, 201);
    }
    
    
    
    public function update(Request $request, $id) {
        $monster = Monster::findOrFail($id);
    
        $this->validate($request, [
            'thumbnail' => 'required',
            'rank' => 'required',
            'name' => 'required',
            'type' => 'required',
            'subtype' => 'required',
            'alignment' => 'required',
            'monster_desc' => 'required',
            'full_img' => 'required'
        ]);
        $monster->update($request->all());
        return response()->json($monster);
    }
    
    
    public function delete($id) {
        $monster = Monster::findOrFail($id);
        $monster->delete();
        return response()->json(null, 204);
    }
    
    
 

}
