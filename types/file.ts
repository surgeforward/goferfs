import { Visibility, Metadata } from '.';

export default class File {
    contents: string;
    name: string;
    ext: string;
    path: string;
    parentDir: string;
    visibility: Visibility;
    size: number;
    isFile: boolean;
    isDir: boolean;
    timestamp: Date;
    mimetype: string;

    constructor(metadata: Metadata, contents: string) {
        this.contents = contents;

        this.name = metadata.name;
        this.ext = metadata.ext;
        this.path = metadata.path;
        this.parentDir = metadata.parentDir;
        this.visibility = metadata.visibility;
        this.size = metadata.size;
        this.isFile = metadata.isFile;
        this.isDir = metadata.isDir;
        this.timestamp = metadata.timestamp;
        this.mimetype = metadata.mimetype;
    }
}
