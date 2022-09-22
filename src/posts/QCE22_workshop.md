---
title: QIR Workshop at IEEE Quantum Week 2022
date: Created
summary: Workshop to discuss progress and challenges around intermediate representations and quantum compilation
tags:
  - workshop
  - event
  - QCE22
  - get-involved
---

The workshop is hosted at [IEEE Quantum Week 2022](https://qce.quantum.ieee.org/2022) at the International Conference on Quantum Computing and Engineering (QCE).

The virtual workshop will be held online on Thursday, Sept. 22 10:00-16:45 Mountain Time (MDT) — UTC-6.
If you would like the participate, please [register for the conference](https://web.cvent.com/event/41315fca-fab0-4847-8bcd-ca0e07d2c849/summary).

The goal of this workshop is to provide a platform for discussing current state-of-the-art approaches to quantum intermediate representation development, expression, deployment, and utility. This workshop will highlight recent approaches, future directions, and novel designs through a series of invited presentations on specific challenge topics from leaders in the field of quantum compilation and software. It is our hope that this workshop will spur collaboration and introduce the community to novel languages, compilers, and frameworks enabling a cohesive and unified software toolchain for quantum-classical computation.

The full abstract of the workshop can also be found on [IEEE Quantum Week’s website](https://qce.quantum.ieee.org/2022/workshops-program/#alexandermccaskey).

## Program

### Introduction and Welcome

*10:00am - 10:30am Mountain Time* <br/>
Presentation (Bettina Heim): *"A Holistic View of the Quantum-Classical Software Stack"*

### Session 1: Cross Platform Programming Approaches

*10:30am - 12:00pm Mountain Time* <br/>
The focus of this session is on programming model approaches and frameworks that enable one to program quantum architectures in a cross-platform manner, and their integration with classically heterogeneous system architectures.

Presentation 1 (Blake Johnson): ["*OpenQASM 3: a multi-level interchange format for quantum circuits*"](#openqasm-3-a-multi-level-interchange-format-for-quantum-circuits)
Presentation 2 (Andrea Mari): [*"Mitiq: A cross-platform error mitigation toolkit"*](#mitiq-a-cross-platform-error-mitigation-toolkit)
Panel Discussion: Michal Stechly, Steve Reinhardt, Ang Li <br/>

### Session 2: Code Transformations and Analysis

*12:30pm - 2:00pm Mountain Time* <br/>
The focus of this session is on lowering high-level abstractions to a common intermediate representation, integration across different toolchains, as well as transformations and analysis passes associated with subsequent compilation stages.

Presentation 1 (Pete Campora): TBD
Presentation 2 (Troels Ronnow): [*"QIR Adaptor Tool: Targeting QIR to meet backend requirements"*](#qir-adaptor-tool-targeting-qir-to-meet-backend-requirements)
Panel Discussion: Tom Lubinski, John Dumbell, Thien Nguyen <br/>

### Session 3: Interfacing with Physical Architectures

*2:30pm - 4:00pm Mountain Time* <br/>
The focus of this session is on targeting a common intermediate representation depending on backend properties, and interfacing the intermediate representation with control electronics systems driving quantum dynamics on the physical architecture.

Presentation 1 (Thomas Alexander): [*"Compiling dynamic circuit programs to quantum hardware at scale"*](#compiling-dynamic-circuit-programs-to-quantum-hardware-at-scale)
Presentation 2 (Kalan Snyder): *"QIR Platform Support: Behind the Scenes"*
Panel Discussion: Wim Lavrijsen, Alan Geller <br/>

### Open Discussion and Networking

*4:00pm - 4:45pm Mountain Time* <br/>
Open discussion and brainstorming to identify collaboration opportunities

## Abstracts

### OpenQASM 3: a multi-level interchange format for quantum circuits

OpenQASM 2 has become a de facto interchange format for quantum circuits. However, it is not sufficiently powerful to describe the full range of circuits that are executable on next-generation quantum systems. I will give an overview of the main features of OpenQASM 3 and how it seeks to address this problem.

### Mitiq: A cross-platform error mitigation toolkit

In order to reduce errors on near-term quantum computers, several "error mitigation" techniques have been recently proposed that are able to significantly improve the estimation of quantum expectation values via simple circuit transformations and classical post-processing.
Mitiq is a Python package for implementing error mitigation techniques on different quantum platforms (it can currently interface with Cirq, Qiskit, PyQuil, Braket and PennyLane). Its workflow is intentionally abstracted from the underlying physical hardware, such that it can be easily applied to any quantum backend. Mitiq applies error mitigation at the "circuit level", in the sense that it takes as input a quantum circuit and produces a sequence of quantum circuits to be executed and post-processed. In this sense, it can be considered as an error mitigation compiler that acts at the top of the circuit execution pipeline. The current progress on quantum intermediate representations opens the interesting perspective of pushing the error mitigation layer down to a lower level of abstraction in the quantum software stack, with promising advantages with respect to efficiency and interoperability.

### QIR Adaptor Tool: Targeting QIR to meet backend requirements

In this talk, I present the QIR Adaptor Tool (QAT) which is used to manipulate and validate QIR in order to target it to a given backend (hardware or simulator). Using a target configuration, the tool allows us to target generic QIR to meet a backend specific profile.

### Compiling dynamic circuit programs to quantum hardware at scale

At IBM, we have a focus on building quantum compiler and control-system solutions that will enable our roadmap to thousands of qubits, necessitating developments in system-level intermediate representations, code-generators, and runtimes that are capable of reasoning about and orchestrating networked systems of heterogeneous hardware in real-time. There is a growing body of literature on transforming and optimizing quantum programs to target abstract representations of a QPU like those in SDKs such as Qiskit. A comparatively smaller body of work describing the challenges in compiling quantum programs to the classical electronics that send and receive signals to/from the QPU exists.

In this talk, we will discuss how the multi-level intermediate representation (MLIR) has enabled us to build a compiler for our hardware control systems while being extensible for future developments in qubit and control-system technologies. We will introduce the high-level architecture of our control systems and critically how we capture this within our software. We will then discuss further compilation challenges that we envision as the number of qubits within a system continue to grow.
