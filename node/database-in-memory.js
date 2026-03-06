import { randomUUID } from "node:crypto"

export class DBMemory {
  #videos = new Map()

  create(video) {
    const id = randomUUID();
    
    this.#videos.set(id, video)
  }
  
  listAll() {
    return this.#videos.values()
  }
  
  update(id, video) {
    this.videos.set(id, video)
  }

  delete(id) {
    this.videos.delete(id)
  }
  
}