package io.catalyte.training.sportsproducts.exceptions;

/**
 * A custom exception for internal service errors.
 */
public class UnprocessableData extends RuntimeException {

    public UnprocessableData() {
    }

    public UnprocessableData(String message) {
        super(message);
    }
}
