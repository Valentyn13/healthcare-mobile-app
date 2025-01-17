import { ContentType, HttpHeader } from 'src/shared/constants/enums/enums.ts';
import { HttpApiOptions } from 'src/shared/constants/types/http-api-options.type.ts';
import { HttpApiResponse } from 'src/shared/constants/types/http-api-response.ts';
import { ValueOf } from 'src/shared/constants/types/value-of.type.ts';

import { HTTP } from '../http/http.package';

export class HttpApi {
    private baseUrl: string;
    private http: HTTP;

    constructor({ baseUrl, http }: { baseUrl: string; http: HTTP }) {
        this.baseUrl = baseUrl;
        this.http = http;
    }

    public async load(
        path: string,
        options: HttpApiOptions,
    ): Promise<HttpApiResponse> {
        const {
            method,
            contentType,
            payload = null,
            hasAuth,
            withCredentials = false,
        } = options;

        const headers = await this.getHeaders(contentType, hasAuth);

        const response = await this.http.load(path, {
            method,
            headers,
            payload,
            withCredentials,
        });

        return response;
    }

    private async getHeaders(
        contentType: ValueOf<typeof ContentType>,
        hasAuth: boolean,
    ): Promise<Headers> {
        const headers = new Headers();

        if (contentType !== ContentType.FORM_DATA) {
            headers.append(HttpHeader.CONTENT_TYPE, contentType);
        }

        if (hasAuth) {
            // Add token to headers here
        }

        return headers;
    }

    protected getFullEndpoint(path: string): string {
        return `${this.baseUrl}${path}`;
    }
}
