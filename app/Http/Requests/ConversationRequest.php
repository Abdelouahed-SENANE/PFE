<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;
class ConversationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'reciever' => 'required|exists:users,id',
        ];

        return $rules;
    }

    public function withValidator(Validator $validator): void
    {
        $recieverIsUser = auth()->user()->id == $validator->getData()['reciever'];
        $validator->after(function(Validator $validator) use ($recieverIsUser) {
            if($recieverIsUser) {
                $validator->errors()->add('reciever', 'Reciever cannot be the same as the current user');
            }
        });
    }
}
