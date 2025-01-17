import { ApiEndpoints, ContentType } from 'src/shared';
import { HTTP, HttpApi } from 'src/shared/api/index.ts';

type Constructor = {
    baseUrl: string;
    http: HTTP;
};
type ExampleApiResponseDto = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};
export class ExampleApi extends HttpApi {
    constructor({ baseUrl, http }: Constructor) {
        super({ baseUrl, http });
    }

    public async getPositions() {
        const response = await this.load(
            this.getFullEndpoint(`${ApiEndpoints.TODOS}/1`),
            {
                method: 'GET',
                contentType: ContentType.JSON,
                hasAuth: false,
            },
        );

        return await response.json<ExampleApiResponseDto>();
    }
}
