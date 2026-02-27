---
title: Adaptive Profile Support in Quantinuum Helios (and System Model H2!)
date: Created
summary: QIR adoption by Quantinuum across multiple generation of ion trap based quantum computers
tags:
  - workstreams
  - recap
---

As quantum computing moves from experimental labs into scalable cloud ecosystems, the need for a standardized interface between software and hardware has become critical. Historically, quantum programming languages were often siloed, requiring custom compilers for every new hardware architecture.

The [Quantum Intermediate Representation (QIR)](https://github.com/qir-alliance/qir-spec) addresses this fragmentation by providing a bridge that allows diverse programming tools to communicate seamlessly with various quantum processors.

QIR is a hardware-agnostic, [LLVM](https://llvm.org/)-based intermediate representation designed to unify quantum and classical code under a common compilation framework.

Proposed and maintained by the [QIR Alliance](https://www.qir-alliance.org) (including Quantinuum), QIR extends LLVM IR with quantum constructs, such as opaque types and specialized quantum instruction functions, allowing a wide variety of quantum front-end languages to target diverse quantum hardware back-ends, all whilst leveraging LLVM's mature optimizations and infrastructure. QIR programs adhere to different profiles, where each QIR profile is a dialect of QIR and is a feature specification for hardware providers.

The [QIR adaptive profile](https://github.com/qir-alliance/qir-spec/blob/1.0/specification/profiles/Adaptive_Profile.md) acts as a bridge between today's hardware and the sophisticated systems of the future. For example, QIR adds many of the capabilities required to move from physical qubits to logically-encoded qubits. It adds many of the instructions developers want to use to encode the logical operations, moving our community closer to a standard-based interoperable quantum-classical IR of the fault-tolerant future.

Quantinuum has steadily integrated deeper QIR support with every new generation of its ion-trap quantum computers. Our System Model H1 supported the base QIR profile. With System Model H2, we introduced initial support for adaptive QIR features. Most recently, with the introduction of Helios, we now have the most complete support of QIR specification including all adaptive profile capabilities.

We summarize our QIR support below:

  |**Capabilities**                         | **System Model H2 (QIR)** |  **Quantinuum Helios (QIR)** |  **Adaptive Profile Specification** |
  |-----------------------------------------|---------------------------|------------------------------|-------------------------------------|
  | Quantum Transformations                 | ✔                         | ✔                            | Core                                |
  | Measurements                            | ✔                         | ✔                            | Core                                |
  | Forward Branching                       | ✔                         | ✔                            | Core                                |
  | Program Output                          | ✔                         | ✔                            | Core                                |
  | Classical Computations                  | Integer-only              | ✔                            | Optional                            |
  | IR defined functions and function calls |                           | ✔                            | Optional                            |
  | Backwards Branching                     |                           | ✔                            | Optional                            |
  | Multiple Target Branching               |                           | ✔                            | Optional                            |
  | Multiple Return Points                  |                           | ✔                            | Optional                            |
  
You can read more about these capabilities, with examples and detailed descriptions, on our [documentation site](https://docs.quantinuum.com/nexus/trainings/notebooks/basics/qir/index.html).

QIR is making steady progress with [stable 1.0 version](https://github.com/qir-alliance/qir-spec/tree/1.0/specification) release including base and adaptive profile specifications. Quantinuum is leading the way in practical adoption of the latest QIR capabilities and working with other Alliance members to define the future of the standard. Much more to come!
