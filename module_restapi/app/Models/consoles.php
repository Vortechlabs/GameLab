<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consoles extends Model
{
    use HasFactory;
    protected $table = 'consoles';

    public function consoles(){
        return $this->hasMany(Games::class, 'console_fk', 'console_id');
    }
}
