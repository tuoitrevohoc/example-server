<?php
namespace App\GraphQL\Queries;

use App\Models\Task;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;

class TaskByIdQuery extends Query {

    protected $attributes = [
        "name" => "task",
    ];

    public function args(): array
    {
        return [
            "id" => [
                "type" => Type::nonNull(Type::string()),
                "description" => "Id of the object to get",
            ]
        ];
    }

    public function type(): Type
    {
        return GraphQL::type("Task");
    }

    public function resolve($root, $args)
    {
        return Task::query()->findOrFail($args['id']);
    }
}
