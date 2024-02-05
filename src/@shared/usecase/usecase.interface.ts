export default interface UseCaseInterface {
  run(input?: any): Promise<any>;
}
