<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Games extends Model
{
    use HasFactory;
    protected $table = 'games';

    public function consoles(){
        return $this->belongsTo(Consoles::class, 'console_fk', 'console_id'); 
    }
}
