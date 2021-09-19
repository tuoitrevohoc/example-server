<?php

namespace App\GraphQL\Types;

use App\Models\Task;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class TaskType extends GraphQLType {

    protected $attributes = [
        "name" => "Task",
        "description" => "a task in a todo list",
        "model" => Task::class,
    ];

    public function fields(): array
    {
        return [
            "id" => [
                "type" => Type::string(),
                "description" => "id of the task",
            ],
            "name" => [
                "type" => Type::string(),
                "description" => "Name of the task",
            ],
            "finished" => [
                "type" => Type::boolean(),
                "description" => "If this task has finished or not",
            ]
        ];
    }
}

