import { Guid, ConcreteType } from '@cashfarm/lang';
import { AggregateRoot, DomainEvent, Identity, IEventPublisher, IRepositoryOf } from '../domain';
import { IEventStore } from './iEventStore';
export declare abstract class EventSourcedRepositoryOf<TAggregate extends AggregateRoot<TId>, TId extends Identity<Guid>> implements IRepositoryOf<TAggregate, TId> {
    protected storage: IEventStore;
    protected aggtClass: ConcreteType<TAggregate>;
    protected eventPublisher: IEventPublisher;
    constructor(storage: IEventStore, aggtClass: ConcreteType<TAggregate>, eventPublisher?: IEventPublisher);
    save(aggregate: TAggregate): Promise<DomainEvent[]>;
    getById(id: TId): Promise<TAggregate>;
}
