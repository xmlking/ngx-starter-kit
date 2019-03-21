import { CACHE_MANAGER, CacheManagerOptions, Inject, Injectable } from '@nestjs/common';

export interface ICacheManager {
  store?: any;
  get<T>(key: string): Promise<T>;
  set<T>(key: string, value: T, options?: CacheManagerOptions): Promise<T>;
  del(key: string): Promise<void>;
}

@Injectable()
export class CacheService {
  private cache!: ICacheManager;

  constructor(@Inject(CACHE_MANAGER) cache: ICacheManager) {
    this.cache = cache;
  }

  get<T>(key: string): Promise<T> {
    return this.cache.get(key);
  }

  set<T>(key: string, value: T, options?: CacheManagerOptions): Promise<T> {
    return this.cache.set(key, value, options);
  }

  del(key: string): Promise<void> {
    return this.cache.del(key);
  }
}
