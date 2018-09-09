import { MongoRepository, UpdateResult, DeepPartial, SaveOptions } from 'typeorm';

export abstract class AuditMongoRepository<Entity> extends MongoRepository<Entity> {
  save<T extends DeepPartial<Entity>>(entity: T, options?: SaveOptions): Promise<T> {
    const createdCol = this.metadata.createDateColumn ? this.metadata.createDateColumn.propertyPath : null;
    const versionCol = this.metadata.versionColumn ? this.metadata.versionColumn.propertyPath : null;
    if (createdCol) {
      (entity as any)[createdCol] = new Date();
    }
    if (versionCol) {
      (entity as any)[versionCol] = 1;
    }
    return super.save(entity, options);
  }

  async update(criteria: string, partialEntity: DeepPartial<Entity>, options?: SaveOptions): Promise<UpdateResult> {
    const updatedCol = this.metadata.updateDateColumn ? this.metadata.updateDateColumn.propertyPath : null;
    const versionCol = this.metadata.versionColumn ? this.metadata.versionColumn.propertyPath : null;
    if (updatedCol) {
      (partialEntity as any)[updatedCol] = new Date();
    }
    if (versionCol) {
      const found = await super.findOne(criteria);
      if (found) {
        (partialEntity as any)[versionCol] = found[versionCol] + 1;
      }
    }
    return super.update(criteria, partialEntity, options);
  }
}
