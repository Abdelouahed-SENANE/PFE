<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class OrderRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'gig_id' => 'required|exists:gigs,id',
            'amount' => 'required|numeric|min:0',
            'currency' => 'required|string|in:usd',
            'gig_name' => 'required|string',
            'gig_id' => 'required',
            'received_at' => 'required|date'
        ];
    }
    public function failedValidation(Validator $validator)
    {
        $response = [
            'status' => false,
            'errors' => $validator->errors(),
            'message' => 'Validation error'
        ];
        throw new HttpResponseException(response()->json($response, 422));
    }
}
