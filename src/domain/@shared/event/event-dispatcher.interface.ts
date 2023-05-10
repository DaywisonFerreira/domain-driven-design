import EventHandlerInterface from "./event-handle.interface";
import EventInterface from "./event.interface";

export default interface EventDispatcherInterface {
  notity(event: EventInterface): void;
  register(eventName: string, eventHandler: EventHandlerInterface): void;
  unregister(eventName: string, eventHandler: EventHandlerInterface): void;
  unregisterAll(): void;
}