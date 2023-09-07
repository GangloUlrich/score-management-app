<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MatcheFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'home_team' => ['required'],
            'away_team' => ['required'],
            'score_home' => ['sometimes'],
            'score_away' => ['sometimes'],
            'pos_home' => ['sometimes'],
            'pos_away' => ['sometimes'],
            'card_home' => ['sometimes'],
            'card_away' => ['sometimes'],
        ];
    }
}
