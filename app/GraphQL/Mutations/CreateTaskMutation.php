<?php
namespace App\GraphQL\Mutations;

use App\Models\Task;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class CreateTaskMutation extends Mutation {

    protected $attributes = [
        "name" => "createTask",
    ];

    public function args(): array
    {
        return [
            "name" => [
                "type" => Type::nonNull(Type::string()),
                "description" => "Name of the task",
            ],
            "finished" => [
                "type" => Type::nonNull(Type::boolean()),
                "description" => "Whether the task has finished"
            ]
        ];
    }

    public function type(): Type
    {
        return GraphQL::type("Task");
    }

    public function resolve($root, $args): Task
    {
        $task = new Task($args);
        $task->save();
        return $task;
    }
}
