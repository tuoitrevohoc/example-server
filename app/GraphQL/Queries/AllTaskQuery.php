<?php
namespace App\GraphQL\Queries;

use App\Models\Task;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;

class AllTaskQuery extends Query {

    protected $attributes = [
        "name" => "allTasks",
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type("Task"));
    }

    public function resolve($root, $args): array
    {
        return Task::all()->toArray();
    }
}
