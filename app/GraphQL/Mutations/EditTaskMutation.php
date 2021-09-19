<?php
namespace App\GraphQL\Mutations;

use App\Models\Task;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class EditTaskMutation extends Mutation {

    protected $attributes = [
        "name" => "editTask",
    ];

    public function args(): array
    {
        return [
            "id" => [
                "type" => Type::nonNull(Type::string()),
                "description" => "Id of the task to change",
            ],
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

    public function resolve($root, $args)
    {
        $task = Task::findOrFail($args["id"]);
        $task->name = $args["name"];
        $task->finished = $args["finished"];
        $task->save();
        return $task;
    }
}
