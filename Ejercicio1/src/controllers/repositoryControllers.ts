import { Request, Response } from "express";

export const getRepositories = (req: Request, res: Response) => {

    res.json({
        "repositories": [
            {
                "id": 1,
                "state": 604
            },
            {
                "id": 2,
                "state": 605
            },
            {
                "id": 3,
                "state": 606
            }
        ]
    });

}