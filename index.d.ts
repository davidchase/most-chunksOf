import {Stream} from "most";

export function chunksOf<A>(n : number, stream : Stream<A>) : Stream<Array<A>>;
