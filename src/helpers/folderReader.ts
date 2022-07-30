import { readdir } from "fs/promises"
import { join } from "path";

const readdirRecursive = async (dir: string) => {
    const files = await readdir( dir, { withFileTypes: true } );
  
    const paths = files.map( async file => {
      const path = join( dir, file.name );
  
      if ( file.isDirectory() ) return await readdirRecursive( path );
  
      return path;
    } );
  
    return ( await Promise.all( paths ) ).flat( Infinity );
}

export default readdirRecursive;