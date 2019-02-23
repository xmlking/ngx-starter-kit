import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

export interface ICacheManager {
  store: any;
  get<T>(key: string): Promise<T>;
  set<T>(key: string, value: T, options?: { ttl: number }): Promise<T>;
  del(key: string): Promise<void>;
}

@Injectable()
export class CacheService {
  private cache!: ICacheManager;

  constructor(@Inject(CACHE_MANAGER) cache: ICacheManager) {
    this.cache = cache;
  }

  public get(key: string): Promise<any> {
    return this.cache.get(key);
  }

  public set(key: string, value: any, options?: { ttl: number }): Promise<any> {
    return this.cache.set(key, value, options);
  }

  public del(key: string): Promise<void> {
    return this.cache.del(key);
  }
}
