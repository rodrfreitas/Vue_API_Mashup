<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Monster extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['thumbnail','rank','name','type','subtype','alignment','monster_desc','full_img'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
