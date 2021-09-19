<?php
namespace App\GraphQL\Queries;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;

class HelloWorldQuery extends Query {

    protected $attributes = [
        "name" => "helloWorld",
    ];

    public function type(): Type
    {
        return Type::string();
    }

    public function resolve(): string
    {
        return "Hello World!";
    }
}
